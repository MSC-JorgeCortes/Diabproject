from django.db import models

# Create your models here.

class Diabetes(models.Model):
    year=models.IntegerField()
    decesos=models.IntegerField()
    

