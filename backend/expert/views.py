from django.http import JsonResponse
from .models import Expert

def expert_list(request):
    experts = Expert.objects.all()
    data = [{"id": expert.id, "name": expert.name, "role": expert.role, "image": expert.image.url, "bio": expert.bio} for expert in experts]
    return JsonResponse(data, safe=False)
