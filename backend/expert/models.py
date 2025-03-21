from django.db import models

class Expert(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    image = models.ImageField(upload_to='experts/')
    bio = models.TextField(blank=True)

    def __str__(self):
        return self.name


# http://127.0.0.1:8000/api/expert/experts/