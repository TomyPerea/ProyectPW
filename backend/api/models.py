from django.db import models

# Create your models here.


class Beers(models.Model):
    name = models.CharField(max_length=30)
    price = models.DecimalField(max_digits=6, decimal_places=2)


