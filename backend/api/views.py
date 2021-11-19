from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from api.models import Beers
from api.serializers import BeersSerializer, RegisterSerializer, MeSerializer


class BeersViewSet(viewsets.ModelViewSet):
    serializer_class = BeersSerializer
    queryset = Beers.objects.all()

    # def get_permissions(self):
    #     if self.action == 'create':
    #         self.permission_classes = [IsAuthenticated]
    #     else:
    #         self.permission_classes = []
    #     return super(BeersViewSet, self).get_permissions()


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def me(request):
    print(MeSerializer(request.user).data)
    return Response(MeSerializer(request.user).data, 200)
