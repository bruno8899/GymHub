from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import ClassSchedule
from .serializers import ClassScheduleSerializer

@api_view(['GET'])
def get_class_schedule(request):
    schedules = ClassSchedule.objects.all()
    serializer = ClassScheduleSerializer(schedules, many=True)
    return Response(serializer.data)
