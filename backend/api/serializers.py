from django.contrib.auth import get_user_model
from django.db.migrations import serializer
from rest_framework import serializers

from api.models import Beers


class BeersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beers
        fields = "__all__"


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        field = ["username", "password"]
