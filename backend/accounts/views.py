from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import RefreshToken
from django.core.mail import send_mail
from django.shortcuts import get_object_or_404
from django.utils.crypto import get_random_string
from django.urls import reverse
from django.conf import settings

# Helper function to generate tokens
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

# User registration view
@api_view(['POST'])
def register(request):
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')

    if not username or not email or not password:
        return Response({'error': 'All fields are required'}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(username=username).exists():
        return Response({'error': 'Username already taken'}, status=status.HTTP_400_BAD_REQUEST)

    user = User.objects.create_user(username=username, email=email, password=password)
    return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)

# User login view
@api_view(['POST'])
def login(request):
    email = request.data.get('email')  # Use email instead of username
    password = request.data.get('password')

    if not email or not password:
        return Response({'error': 'Email and password are required'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user = User.objects.get(email=email)  # Search by email
    except User.DoesNotExist:
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)

    if not user.check_password(password):
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)

    tokens = get_tokens_for_user(user)
    return Response({'access_token': tokens['access'], 'refresh_token': tokens['refresh']}, status=status.HTTP_200_OK)

@api_view(["POST"])
def forgot_password(request):
    email = request.data.get("email")
    if not email:
        return Response({"error": "Email is required"}, status=status.HTTP_400_BAD_REQUEST)

    user = get_object_or_404(User, email=email)

    # Generate a unique reset token (for simplicity, a random string)
    reset_token = get_random_string(50)
    user.profile.reset_token = reset_token  # Assuming User has a Profile model with a `reset_token` field
    user.profile.save()

    # Generate reset link
    reset_link = f"http://localhost:3000/reset-password/{reset_token}/"

    # Send email
    send_mail(
        "Password Reset Request",
        f"Click the link to reset your password: {reset_link}",
        settings.EMAIL_HOST_USER,
        [email],
        fail_silently=False,
    )

    return Response({"message": "Password reset link sent to your email."}, status=status.HTTP_200_OK)