from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from api.models import Beers
from api.serializers import BeersSerializer


class BeersViewSet(viewsets.ModelViewSet):
    serializer_class = BeersSerializer
    queryset = Beers.objects.all()

