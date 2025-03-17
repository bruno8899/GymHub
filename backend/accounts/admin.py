from django.contrib import admin
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin

class CustomUserAdmin(UserAdmin):
    model = User
    list_display = ('username', 'email',  'is_active', 'is_staff')
    search_fields = ('username', 'email')

admin.site.unregister(User)  # Unregister the original User model
admin.site.register(User, CustomUserAdmin)  # Register the custom UserAdmin
