from django.contrib.auth import get_user_model
from django.db.migrations import serializer
from rest_framework import serializers

from api.models import Beers, Burgers


class BeersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beers
        fields = "__all__"

    def create(self, validated_data):
        beer = super(BeersSerializer, self).create(validated_data)
        return beer


class BurgersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Burgers
        fields = "__all__"

    def create(self, validated_data):
        burger = super(BurgersSerializer, self).create(validated_data)
        return burger


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = get_user_model()
        fields = ["username", "email", "password", "first_name", "last_name"]

    def create(self, validated_data):
        user = get_user_model().objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
        )
        return user


class MeSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = "__all__"


