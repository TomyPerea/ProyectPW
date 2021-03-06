from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from api.models import Beers, Burgers
from api.serializers import BeersSerializer, RegisterSerializer, MeSerializer, BurgersSerializer

serializers = [BeersSerializer, BurgersSerializer]


class BeersViewSet(viewsets.ModelViewSet):
    serializer_class = serializers[0]
    queryset = Beers.objects.all()

    def get_permissions(self):
        if self.action == 'create':
            self.permission_classes = [IsAuthenticated]
        else:
            self.permission_classes = []
        return super(BeersViewSet, self).get_permissions()

    def get_queryset(self):
            queryset = self.queryset.all()
            tipo = self.request.query_params.get('type')
            if tipo is not None:
                queryset = queryset.filter(type=tipo)
            return queryset


class BurgersViewSet(viewsets.ModelViewSet):
    serializer_class = serializers[1]
    queryset = Burgers.objects.all()

    def get_permissions(self):
        if self.action == 'create':
            self.permission_classes = [IsAuthenticated]
        else:
            self.permission_classes = []
        return super(BurgersViewSet, self).get_permissions()

    def get_queryset(self):
            queryset = self.queryset.all()
            tipo = self.request.query_params.get('type')
            if tipo is not None:
                queryset = queryset.filter(type=tipo)
            return queryset


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def me(request):
    print(MeSerializer(request.user).data)
    return Response(MeSerializer(request.user).data, 200)

