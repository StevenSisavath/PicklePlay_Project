# Generated by Django 4.0.4 on 2023-01-31 23:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tournaments', '0005_alter_tournament_end_date_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='tournament',
            name='format',
            field=models.CharField(default='2 Round Robins then the winners of each side will play each other for first.', max_length=100),
        ),
    ]