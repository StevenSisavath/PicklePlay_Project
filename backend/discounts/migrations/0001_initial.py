# Generated by Django 4.0.4 on 2023-01-19 22:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Discount',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('discount_type', models.CharField(max_length=100)),
                ('discount_total', models.FloatField(max_length=10)),
            ],
        ),
    ]
