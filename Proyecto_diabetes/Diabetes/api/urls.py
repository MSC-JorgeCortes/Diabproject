from django.urls import path
from .views import Diabetes

urlpatterns=[
    path('diabetes/',Diabetes.as_view(),name='diabetes_LIST')
]