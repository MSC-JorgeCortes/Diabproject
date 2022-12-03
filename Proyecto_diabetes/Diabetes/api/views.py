from django.http.response import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import json
from .models import Diabetes

# Create your views here.

class ClassDiabetes(View):
    @method_decorator(csrf_exempt)
    def dispatch(self,request, *args, **kwargs):
        return super().dispatch(request,*args, **kwargs)

    def post(self,req):
        datos = json.loads(req.body)
        # añadiendo datos en la tabla diabetes
        if (datos['tipo'] == 'add'):
            year = datos['year']
            decesos = datos['decesos']
            Diabetes.objects.create(year=datos['year'],decesos=datos['decesos'])
            return JsonResponse({"mensaje":"Registro añadido"})
        # Extaer datos para la gráfica
        if datos['tipo'] == 'grafical':
          registros = list(Diabetes.objects.values())
          datosDecesos=[]
          for registro in registros:
            datosDecesos.append({'name':str(registro['year']),'value':registro['decesos']})

          datos = { 'grafical':[{
                            'name': "Decesos",
                            'series': datosDecesos
                    }]
                  }
          print (datos)
          return JsonResponse(datos)


