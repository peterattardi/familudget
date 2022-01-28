

# Create your views here.

import json
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import re

from accounts.models import User

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['email'] = user.email
        token['username'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterUser(APIView):
    def post(self, request):
        try:
            print(request.data)
            username = request.data["username"]
            email = request.data["email"]
            password1 = request.data["password1"]
            password2 = request.data["password2"]

            if not re.match(r"[^@]+@[^@]+\.[^@]+", email):
                message = "Email not valid"
                return Response(json.dumps(message), status=status.HTTP_400_BAD_REQUEST)
            if(password1 != password2):
                message = "Passwords are not the same"
                return Response(json.dumps(message), status=status.HTTP_400_BAD_REQUEST)
            if not re.match(r"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})",password1):
                message = "Passwords invalid"
                return Response(json.dumps(message), status=status.HTTP_400_BAD_REQUEST)
            User.objects.create_user(email, username, password1)
            return Response({"User added"})
        except Exception as e:
            print(e)
            message = "Unable to register"
            return Response(json.dumps(message), status=status.HTTP_400_BAD_REQUEST)