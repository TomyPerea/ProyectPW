# Generated by Django 3.2.9 on 2021-11-19 16:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20211116_1007'),
    ]

    operations = [
        migrations.AddField(
            model_name='beers',
            name='type',
            field=models.CharField(default='', max_length=30),
            preserve_default=False,
        ),
    ]