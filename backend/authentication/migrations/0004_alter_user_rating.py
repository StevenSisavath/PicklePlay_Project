# Generated by Django 4.0.4 on 2023-01-31 23:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0003_user_gender_user_rating'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='rating',
            field=models.FloatField(blank=True, max_length=10, null=True),
        ),
    ]
