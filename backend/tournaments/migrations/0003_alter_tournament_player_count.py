# Generated by Django 4.0.4 on 2023-01-26 12:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tournaments', '0002_rename_address_id_tournament_address_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tournament',
            name='player_count',
            field=models.IntegerField(),
        ),
    ]
