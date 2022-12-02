from django.http.response import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import json

# Create your views here.

class Diabetes(View):
    @method_decorator(csrf_exempt)
    def dispatch(self,request, *args, **kwargs):
        return super().dispatch(request,*args, **kwargs)

    def post(self,req):
        datos = json.loads(req.body)
        if (datos['tipo'] == 'add'):
            year = datos['year']
            decesos = datos['decesos']
            Diabetes.objects.create(year=datos['year'],decesos=datos['decesos'])
        return JsonResponse(datos)
            
        