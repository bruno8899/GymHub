from django.contrib import admin
from .models import ContactForm

@admin.register(ContactForm)
class ContactFormAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'message', 'created_at')
    search_fields = ('name', 'email')

# OR simply
# admin.site.register(ContactForm)
