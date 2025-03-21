from django.db import models

class Trainer(models.Model):
    name = models.CharField(max_length=100)
    specialty = models.CharField(max_length=200)
    experience = models.IntegerField()
    image = models.ImageField(upload_to='trainers/', blank=True, null=True)

    def __str__(self):
        return self.name

class HiredTrainer(models.Model):
    trainer_name = models.CharField(max_length=255)
    trainer_specialty = models.CharField(max_length=255)
    trainer_experience = models.IntegerField()
    user_name = models.CharField(max_length=255)
    user_email = models.EmailField()
    hired_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user_name} hired {self.trainer_name}"