from rest_framework.serializers import ModelSerializer 
from ..models import *

class DepartementSerializer(ModelSerializer):
    class Meta:
        model = Departement
        fields = ['id', 'dep_name', 'role']

class MailSerializer(ModelSerializer):
    class Meta:
        model = Mail
        fields = ['id', 'expediteur', 'objet', 'text', 'date_envoi']

class AdministrateurSerializer(ModelSerializer):
    class Meta:
        model = Administrateur
        fields = ['id', 'username', 'password']

class EmployeeSerializer(ModelSerializer):
    class Meta:
        model = Employee
        fields = ['id', 'username', 'password', 'email', 'telephone', 'departement', 'mails']

class DocumentSerializer(ModelSerializer):
    class Meta:
        model = Document
        fields = ['id', 'pdf', 'mail_doc']

class Image_msgSerializer(ModelSerializer):
    class Meta:
        model = Image_msg
        fields = ['id', 'image', 'mail_img']

class Voice_msgSerializer(ModelSerializer):
    class Meta:
        model = Voice_msg
        fields = ['id', 'audio', 'mail_v']

class Social_AccSerializer(ModelSerializer):
    class Meta:
        model = Social_Acc
        fields = ['id', 'acc_name', 'acc_pass', 'social_media']

class EntrepriseSerializer(ModelSerializer):
    class Meta:
        model = Entreprise
        fields = ['id', 'name', 'location', 'telephone']