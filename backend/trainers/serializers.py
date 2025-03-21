from rest_framework import serializers
from .models import Trainer, HiredTrainer

class TrainerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trainer
        fields = '__all__'

class HiredTrainerSerializer(serializers.ModelSerializer):
    class Meta:
        model = HiredTrainer
        fields = '__all__'