from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from user_app.models import User
from user_app.serializers import UserSerializers


class UserViewSet(viewsets.ModelViewSet):

    queryset = User.objects.all()
    serializer_class = UserSerializers

    # def perform_create(self, serializer):
    #     serializer.save()