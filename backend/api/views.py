from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, generics

from api.models import Beers
from api.serializers import BeersSerializer, RegisterSerializer


class BeersViewSet(viewsets.ModelViewSet):
    serializer_class = BeersSerializer
    queryset = Beers.objects.all()


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
