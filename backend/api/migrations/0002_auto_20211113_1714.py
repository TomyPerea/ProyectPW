# Generated by Django 3.2.9 on 2021-11-13 20:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='beers',
            name='test',
        ),
        migrations.AddField(
            model_name='beers',
            name='name',
            field=models.CharField(default='', max_length=30),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='beers',
            name='price',
            field=models.FloatField(default='3', max_length=100),
            preserve_default=False,
        ),
    ]
