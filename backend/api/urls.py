from django.urls import path, include
from rest_framework import routers

from api.views import BeersViewSet

router = routers.DefaultRouter()
router.register(r'beers', BeersViewSet)

urlpatterns = [
    path('', include(router.urls))
]