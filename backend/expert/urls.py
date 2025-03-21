from django.urls import path
from .views import expert_list

urlpatterns = [
    path('experts/', expert_list, name='expert_list'),
]
