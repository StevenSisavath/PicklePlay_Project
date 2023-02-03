from django.contrib.auth import get_user_model
from .serializers import MyTokenObtainPairSerializer, RegistrationSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
User = get_user_model()
from rest_framework.decorators import api_view, permission_classes

from rest_framework.permissions import IsAuthenticated, AllowAny
from django.shortcuts import get_object_or_404


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegistrationSerializer
