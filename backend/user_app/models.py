from django.db import models

# Create your models here.


class User(models.Model):
    user_created = models.DateTimeField(auto_now_add=True)
    user_name = models.CharField(max_length=30)
    user_role = models.CharField(max_length=30)

    class Meta:
        ordering = ('user_created',)

    # def save(self, *args, **kwargs):
    #     super(User, self).save(*args, **kwargs)