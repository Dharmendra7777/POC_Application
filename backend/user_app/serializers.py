from rest_framework import serializers
from user_app.models import User


class UserSerializers(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'user_name', 'user_role')

    # def create(self, validated_data):
    #     """
    #     Create and return a new `User` instance, given the validated data.
    #     """
    #     return User.objects.create(**validated_data)

    # def update(self, instance, validated_data):
    #     """
    #     Update and return an existing `User` instance, given the validated data.
    #     """
    #     instance.user_name = validated_data.get('user_name', instance.user_name)
    #     instance.user_role = validated_data.get('user_role', instance.user_role)
    #     instance.save()
    #     return instance
