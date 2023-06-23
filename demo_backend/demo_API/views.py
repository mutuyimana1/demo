from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Company
from .serializers import CompanySerializer

class CompanyAPIView(APIView):
    def get(self, request):
        company_info = Company.objects.first()  # Assuming there's only one company instance
        serializer = CompanySerializer(company_info)
        return Response(serializer.data)
