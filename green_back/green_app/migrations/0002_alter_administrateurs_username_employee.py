# Generated by Django 5.0 on 2024-02-23 00:17

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('green_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='administrateurs',
            name='username',
            field=models.CharField(max_length=255, unique=True),
        ),
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=255, unique=True)),
                ('password', models.CharField()),
                ('email', models.EmailField(max_length=254)),
                ('telephone', models.CharField()),
                ('departement', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='green_app.departement')),
                ('mails', models.ManyToManyField(to='green_app.mail')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
