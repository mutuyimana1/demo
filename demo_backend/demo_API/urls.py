from django.urls import path
from .views import CompanyAPIView

urlpatterns = [
    path('company/', CompanyAPIView.as_view(), name='company-api'),
]
