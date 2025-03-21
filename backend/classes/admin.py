from django.contrib import admin
from .models import ClassSchedule

@admin.register(ClassSchedule)
class ClassScheduleAdmin(admin.ModelAdmin):
    list_display = ('class_name', 'time', 'trainer')  # Display fields in admin panel
