from django.urls import path
from .views import ClassDiabetes

urlpatterns=[
    path('diabetes/',ClassDiabetes.as_view(),name='diabetes_LIST')
]
