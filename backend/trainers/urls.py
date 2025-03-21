# trainers/urls.py
from django.urls import path
from .views import get_trainers , HireTrainerView

urlpatterns = [
    path('trainers/', get_trainers, name='get_trainers'),
    path('hire/', HireTrainerView.as_view(), name='hire-trainer'),
]
