from django.db import models

class Company(models.Model):
    mission = models.TextField()
    vision = models.TextField()
    objectives = models.TextField()
