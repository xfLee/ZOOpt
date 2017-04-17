import numpy as np
from zoo.algos.paretoopt.NormalizeData import NormlizeDate
from zoo.opt import Opt
from zoo.parameter import Parameter
from zoo.objective import Objective
from zoo.dimension import Dimension
from math import exp


class MSE:
    def __init__(self,X,y,k):
        self._best_solution = None
        self._X=X
        self._y=y
        self._C=X.T*X
        self._b=X.T*y
        self._size=np.shape(X)
        self._k=k
    def position(self,s):
        n=np.shape(s)[1]
        result=[]
        for i in range(0,n):
            if s[0,i]==1:
                result.append(i)
        return result  
      
    def constraint(self,solution):
        return self._k-solution[0,:].sum()#result is bigger than zero mean satisitying,otherwise
    
    def isolationfunction(self,solution):
            return 0#In this case isolationfunction is a constant
        
    def get_k(self):
        return self._k
     
    def loss(self,solution):
        if solution[0, :].sum()==0.0 or solution[0, :].sum()>=2.0*self._k:
            return float('inf')
        pos = self.position(solution)
        alpha = (self._C[pos, :])[:, pos].I*self._b[pos, :]
        sub = self._y - self._X[:, pos]*alpha
        mse=sub.T*sub/self._size[0]
        return mse

if __name__=='__main__':
    #get normalized data from file 
    orginX=NormlizeDate("housing.txt")
    n=np.shape(orginX)[1]
    X=orginX[:,0:n-1]
    y=orginX[:,n-1]
    k=8
    opt=Opt()
    Mse=MSE(X,y,k)
    dimension=Dimension((n-1,k))#n represent the number of features
    parameter=Parameter(algorithm='poss')
    parameter.set_paretoopt_iteration_parameter(2*exp(1))
    parameter.set_isolationFunc(Mse.isolationfunction)
    objective=Objective(func=Mse.loss, dim=dimension, constraint=Mse.constraint)
    print 'start'
    result=opt.min(objective, parameter)
    print result