from django.urls import path
from .views import get_class_schedule

urlpatterns = [
    path('schedule/', get_class_schedule, name='class_schedule'),
]
