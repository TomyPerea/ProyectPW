from rest_framework import serializers

from api.models import Beers


class BeersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beers
        fields = "__all__"

