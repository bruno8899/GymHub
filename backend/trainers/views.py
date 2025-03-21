# trainers/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from .models import Trainer
from .models import HiredTrainer
from .serializers import HiredTrainerSerializer
from rest_framework import status

def get_trainers(request):
    trainers = Trainer.objects.all().values('id', 'name', 'specialty', 'experience', 'image')
    return JsonResponse(list(trainers), safe=False)


class HireTrainerView(APIView):
    def post(self, request):
        serializer = HiredTrainerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  # Save the hired trainer details
            return Response({'message': 'Trainer hired successfully!'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)