from django.db import models

class PDF(models.Model):
    srno = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Entity(models.Model):
    pdf = models.ForeignKey(PDF, on_delete=models.CASCADE)
    label = models.CharField(max_length=255)
    text = models.TextField()

    def __str__(self):
        return f"{self.label}: {self.text}"