from django.db import models

class ClassSchedule(models.Model):
    class_name = models.CharField(max_length=100)
    time = models.CharField(max_length=50)
    trainer = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.class_name} - {self.time} - {self.trainer}"
