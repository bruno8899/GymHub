from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.http import JsonResponse
from django.views import View
import json
from .models import ContactForm

@method_decorator(csrf_exempt, name='dispatch')  # Correct way for class-based views
class ContactFormView(View):

    def post(self, request):
        try:
            data = json.loads(request.body.decode('utf-8'))  # Ensure proper JSON parsing
            name = data.get('name')
            email = data.get('email')
            message = data.get('message')

            # Validate input
            if not name or not email or not message:
                return JsonResponse({"status": "error", "message": "All fields are required."}, status=400)

            # Save to database
            contact_form = ContactForm.objects.create(
                name=name,
                email=email,
                message=message
            )

            return JsonResponse({"status": "success", "message": "Form submitted successfully!"}, status=201)

        except json.JSONDecodeError:
            return JsonResponse({"status": "error", "message": "Invalid JSON data"}, status=400)

        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=500)
