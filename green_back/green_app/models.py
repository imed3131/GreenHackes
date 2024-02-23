from django.db import models
from django.contrib.auth.models import AbstractUser


class User(models.Model):
    id = models.BigAutoField(primary_key=True)
    username = models.CharField(max_length=255,unique=True)
    password = models.CharField()

    class Meta:
        abstract = True


class Departement(models.Model):
    id = models.BigAutoField(primary_key=True)
    CATEGORY_CHOICES = (
        ('role1', 'Simple'),
        ('role2', 'Chef'),
        # Add more categories as needed
    )
    dep_name = models.CharField()
    role = models.CharField(max_length=50, choices=CATEGORY_CHOICES)

class Mail(models.Model):
    id = models.BigAutoField(primary_key=True)
    expediteur = models.CharField()
    objet = models.CharField()
    text = models.TextField()
    date_envoi = models.DateField()

class Administrateur(User):
    pass

class Employee(User):
    email = models.EmailField()
    telephone = models.CharField()
    departement = models.ForeignKey(Departement ,on_delete=models.CASCADE)
    mails = models.ManyToManyField(Mail)

class Document(models.Model):
    id = models.BigAutoField(primary_key=True)
    pdf = models.FileField(upload_to='documents/')
    mail_doc = models.ForeignKey(Mail ,on_delete= models.CASCADE)

class Image_msg(models.Model):
    id = models.BigAutoField(primary_key=True)
    image = models.ImageField(upload_to='images/')
    mail_img = models.ForeignKey(Mail ,on_delete= models.CASCADE)

class Voice_msg(models.Model):
    id = models.BigAutoField(primary_key=True)
    audio = models.FileField(upload_to='audio/')
    mail_v = models.ForeignKey(Mail ,on_delete= models.CASCADE)

class Social_Acc(models.Model):
    id = models.BigAutoField(primary_key=True)
    CATEGORY_CHOICES = (
        ('social1', 'Facebook'),
        ('social2', 'Instagram'),
        ('social3', 'Linkedin'),
        # Add more categories as needed
    )
    acc_name = models.CharField()
    acc_pass  = models.CharField()
    social_media = models.CharField(max_length=50, choices=CATEGORY_CHOICES)

class Entreprise(models.Model):
    id = models.BigAutoField(primary_key=True)
    name  = models.CharField()
    location = models.CharField()
    telephone = models.CharField()







# Create your models here.

