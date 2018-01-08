Search.setIndex({envversion:49,filenames:["algos","algos/high_dimensionality_handling","algos/high_dimensionality_handling/sre_optimization","algos/noise_handling","algos/noise_handling/ponss","algos/noise_handling/ssracos","algos/opt_algorithms","algos/opt_algorithms/paretoopt","algos/opt_algorithms/paretoopt/pareto_optimization","algos/opt_algorithms/paretoopt/paretoopt","algos/opt_algorithms/racos_all","algos/opt_algorithms/racos_all/racos","algos/opt_algorithms/racos_all/racos_classification","algos/opt_algorithms/racos_all/racos_common","algos/opt_algorithms/racos_all/racos_optimization","algos/opt_algorithms/racos_all/sracos","dimension","example","example/direct_policy_search_for_gym","example/direct_policy_search_for_gym/gym_task","example/direct_policy_search_for_gym/nn_model","example/direct_policy_search_for_gym/run","example/linear_classifier_using_ramploss","example/linear_classifier_using_ramploss/ramploss","example/sequential_random_embedding","example/sequential_random_embedding/continuous_sre_opt","example/sequential_random_embedding/sphere_sre","example/simple_functions","example/simple_functions/continuous_opt","example/simple_functions/discrete_opt","example/simple_functions/discrete_with_order_opt","example/simple_functions/mixed_opt","example/simple_functions/opt_under_noise","example/simple_functions/quick_start","example/simple_functions/simple_functions_file","example/sparse_regression","example/sparse_regression/ponss_opt","example/sparse_regression/poss_opt","example/sparse_regression/sparse_mse","exp_opt","objective","opt","parameter","solution","utils","utils/tool_function","utils/zoo_global","zoopt"],objects:{"":{continuous_opt:[28,0,0,"-"],continuous_sre_opt:[25,0,0,"-"],dimension:[16,0,0,"-"],discrete_opt:[29,0,0,"-"],discrete_with_order_opt:[30,0,0,"-"],exp_opt:[39,0,0,"-"],gym_task:[19,0,0,"-"],mixed_opt:[31,0,0,"-"],nn_model:[20,0,0,"-"],objective:[40,0,0,"-"],opt:[41,0,0,"-"],opt_under_noise:[32,0,0,"-"],parameter:[42,0,0,"-"],pareto_optimization:[8,0,0,"-"],paretoopt:[9,0,0,"-"],ponss:[4,0,0,"-"],ponss_opt:[36,0,0,"-"],poss_opt:[37,0,0,"-"],quick_start:[33,0,0,"-"],racos:[11,0,0,"-"],racos_classification:[12,0,0,"-"],racos_common:[13,0,0,"-"],racos_optimization:[14,0,0,"-"],ramploss:[23,0,0,"-"],run:[21,0,0,"-"],simple_function:[34,0,0,"-"],solution:[43,0,0,"-"],sparse_mse:[38,0,0,"-"],sphere_sre:[26,0,0,"-"],sracos:[15,0,0,"-"],sre_optimization:[2,0,0,"-"],ssracos:[5,0,0,"-"],tool_function:[45,0,0,"-"],zoo_global:[46,0,0,"-"]},"dimension.Dimension":{__init__:[16,3,1,""],copy_region:[16,3,1,""],deep_copy:[16,3,1,""],is_discrete:[16,3,1,""],judge_match:[16,4,1,""],limited_space:[16,3,1,""],merge_dim:[16,4,1,""],print_dim:[16,3,1,""],rand_sample:[16,3,1,""],set_all:[16,3,1,""]},"exp_opt.ExpOpt":{__init__:[39,3,1,""],min:[39,4,1,""],result_analysis:[39,4,1,""]},"gym_task.GymTask":{__init__:[19,3,1,""],new_nnmodel:[19,3,1,""],nn_policy_sample:[19,3,1,""],reset_task:[19,3,1,""],sum_reward:[19,3,1,""],transform_action:[19,3,1,""]},"nn_model.ActivationFunction":{sigmoid:[20,4,1,""]},"nn_model.Layer":{__init__:[20,3,1,""],cal_output:[20,3,1,""],decode_w:[20,3,1,""]},"nn_model.NNModel":{__init__:[20,3,1,""],add_layer:[20,3,1,""],cal_output:[20,3,1,""],construct_nnmodel:[20,3,1,""],decode_w:[20,3,1,""]},"objective.Objective":{__init__:[40,3,1,""],clean_history:[40,3,1,""],construct_solution:[40,3,1,""],default_inherit:[40,4,1,""],default_post_inherit:[40,4,1,""],eval:[40,3,1,""],get_history_bestsofar:[40,3,1,""],parameter_set:[40,3,1,""],resample:[40,3,1,""],set_func:[40,3,1,""]},"opt.Opt":{__init__:[41,3,1,""],min:[41,4,1,""],set_global:[41,4,1,""]},"parameter.Parameter":{__init__:[42,3,1,""],auto_set:[42,3,1,""]},"pareto_optimization.ParetoOptimization":{__init__:[8,3,1,""],opt:[8,3,1,""]},"paretoopt.ParetoOpt":{__init__:[9,3,1,""],mutation:[9,4,1,""],opt:[9,3,1,""]},"ponss.PONSS":{__init__:[4,3,1,""],opt:[4,3,1,""],theta_dominate:[4,4,1,""],theta_weak_dominate:[4,4,1,""]},"racos.Racos":{__init__:[11,3,1,""],opt:[11,3,1,""]},"racos_classification.RacosClassification":{__init__:[12,3,1,""],mixed_classification:[12,3,1,""],print_neg:[12,3,1,""],print_pos:[12,3,1,""],print_sample_region:[12,3,1,""],rand_sample:[12,3,1,""],reset_classifier:[12,3,1,""],set_uncertain_bit:[12,3,1,""]},"racos_common.RacosCommon":{__init__:[13,3,1,""],clear:[13,3,1,""],distinct_sample:[13,3,1,""],distinct_sample_classifier:[13,3,1,""],distinct_sample_from_set:[13,3,1,""],extend:[13,4,1,""],init_attribute:[13,3,1,""],is_distinct:[13,4,1,""],selection:[13,3,1,""],show_best_solution:[13,3,1,""]},"racos_optimization.RacosOptimization":{__init__:[14,3,1,""],choose_ub:[14,4,1,""],clear:[14,3,1,""],opt:[14,3,1,""]},"ramploss.RampLoss":{__init__:[23,3,1,""],calc_h:[23,3,1,""],calc_product:[23,3,1,""],calc_regularization:[23,3,1,""],dim:[23,3,1,""],eval:[23,3,1,""],read_data:[23,3,1,""],training_error:[23,3,1,""],trans_label:[23,3,1,""]},"simple_function.SetCover":{__init__:[34,3,1,""],dim:[34,5,1,""],fx:[34,3,1,""]},"solution.Solution":{__init__:[43,3,1,""],deep_copy:[43,3,1,""],deep_copy_set:[43,4,1,""],exist_equal:[43,3,1,""],find_maximum:[43,4,1,""],find_minimum:[43,4,1,""],is_equal:[43,3,1,""],print_solution_set:[43,4,1,""]},"sparse_mse.SparseMSE":{__init__:[38,3,1,""],constraint:[38,3,1,""],get_dim:[38,3,1,""],loss:[38,3,1,""],normalize_data:[38,4,1,""],position:[38,3,1,""],read_data:[38,3,1,""]},"sracos.SRacos":{__init__:[15,3,1,""],binary_search:[15,3,1,""],distance:[15,4,1,""],opt:[15,3,1,""],replace:[15,3,1,""],strategy_lm:[15,3,1,""],strategy_rr:[15,3,1,""],strategy_wr:[15,3,1,""]},"sre_optimization.SequentialRandomEmbedding":{__init__:[2,3,1,""],opt:[2,3,1,""]},"ssracos.SSRacos":{__init__:[5,3,1,""],get_best_solution:[5,3,1,""],opt:[5,3,1,""],sort_solution_list:[5,3,1,""],update_possible_solution:[5,3,1,""]},"tool_function.ToolFunction":{__init__:[45,3,1,""],deepcopy:[45,4,1,""],list_compare:[45,4,1,""],log:[45,4,1,""]},"zoo_global.Global":{__init__:[46,3,1,""],set_precision:[46,3,1,""],set_seed:[46,3,1,""]},continuous_opt:{minimize_ackley_continuous:[28,1,1,""],minimize_sphere_continuous:[28,1,1,""]},continuous_sre_opt:{minimize_sphere_sre:[25,1,1,""]},dimension:{Dimension:[16,2,1,""]},discrete_opt:{minimize_setcover_discrete:[29,1,1,""]},discrete_with_order_opt:{minimize_sphere_discrete_order:[30,1,1,""]},exp_opt:{ExpOpt:[39,2,1,""]},gym_task:{GymTask:[19,2,1,""]},mixed_opt:{minimize_sphere_mixed:[31,1,1,""]},nn_model:{ActivationFunction:[20,2,1,""],Layer:[20,2,1,""],NNModel:[20,2,1,""]},objective:{Objective:[40,2,1,""]},opt:{Opt:[41,2,1,""]},opt_under_noise:{minimize_ackley_continuous_noisy:[32,1,1,""]},parameter:{Parameter:[42,2,1,""]},pareto_optimization:{ParetoOptimization:[8,2,1,""]},paretoopt:{ParetoOpt:[9,2,1,""]},ponss:{PONSS:[4,2,1,""]},racos:{Racos:[11,2,1,""]},racos_classification:{RacosClassification:[12,2,1,""]},racos_common:{RacosCommon:[13,2,1,""]},racos_optimization:{RacosOptimization:[14,2,1,""]},ramploss:{RampLoss:[23,2,1,""]},run:{run_ss_test:[21,1,1,""],run_test:[21,1,1,""]},simple_function:{SetCover:[34,2,1,""],ackley:[34,1,1,""],ackley_noise_creator:[34,1,1,""],sphere:[34,1,1,""],sphere_discrete_order:[34,1,1,""],sphere_mixed:[34,1,1,""]},solution:{Solution:[43,2,1,""]},sparse_mse:{SparseMSE:[38,2,1,""]},sphere_sre:{sphere_sre:[26,1,1,""]},sracos:{SRacos:[15,2,1,""]},sre_optimization:{SequentialRandomEmbedding:[2,2,1,""]},ssracos:{SSRacos:[5,2,1,""]},tool_function:{ToolFunction:[45,2,1,""]},zoo_global:{Global:[46,2,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","staticmethod","Python static method"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:staticmethod","5":"py:attribute"},terms:{"class":[2,4,5,8,9,11,12,13,14,15,16,19,20,23,34,38,39,40,41,42,43,45,46],"default":[40,42],"float":46,"function":[5,9,13,14,19,20,21,23,25,26,28,29,30,31,32,33,34,38,39,40,41,42,45,47],"new":[13,16,19,43,45],"return":[2,4,5,8,9,11,12,13,14,15,16,19,20,21,23,25,28,29,30,31,32,34,38,39,40,41,42,43,45,46],"static":[4,9,13,14,15,16,20,38,39,40,41,43,45],"true":[4,13,16,19,42,43,45],__constraint:9,__func:9,__init__:[2,4,5,8,9,11,12,13,14,15,16,19,20,23,34,38,39,40,41,42,43,45,46],__solution_spac:12,_data:13,_negative_data:13,_positive_data:[5,13],_possible_solution_list:5,_size:16,accomplish:47,accord:14,acklei:[28,32,33,34],ackley_noise_cr:34,action:19,activ:20,activation_funct:20,activationfunct:20,add:[5,20],add_lay:20,advanc:42,aim:47,algo:[],algorithm:[2,4,5,11,12,14,15,21,42,46,47],all:[5,12,16,20,38,42,46],also:47,among:39,ani:23,anoth:43,api:21,arff:23,arfffil:23,assign:20,associ:40,attach:[40,43],attribut:[13,16,40],author:[2,5,8,9,11,12,13,14,15,16,19,20,21,23,25,26,28,29,30,31,32,33,34,38,39,40,41,42,43,45,46],auto_set:42,automat:[14,42],autoset:42,averag:[39,42],balance_r:42,base:15,befor:5,begin:15,best:[2,4,5,8,9,11,13,14,15,23,39,40,42],best_n:39,best_sol:15,best_solut:39,between:[15,23],bia:20,big:20,binary_search:15,bit:[5,9,11,12,14,15,42],black:47,both:16,box:47,budget:42,cal_output:20,calc_h:23,calc_product:23,calc_regular:23,calcul:[23,39],call:[21,42,47],can:[12,21,34,47],canon:[8,9],chang:[5,42],chao:[9,38],check:[13,16,43],check_distinct:13,chen:[5,28,32,33,40,42,43],choos:[12,13,14,19],choose_ub:14,chosen:15,classif:15,classifi:[12,13,23],clean:40,clean_histori:40,clear:[13,14],collect:47,column:38,combin:5,common:13,compar:[13,45],complex:47,comput:15,concaten:[13,20],constraint:[9,38,40],construct:[20,23,38,40],construct_nnmodel:20,construct_solut:40,contain:[2,4,5,11,12,13,14,15,16,19,20,25,26,28,29,30,31,32,33,38,39,40,41,42,43,45,46],content:45,continu:[12,16,28,31,33,34,47],continuous_opt:[17,27],continuous_sre_opt:[17,24],convex:23,copi:[5,16,43,45],copy_region:16,count:42,cover:[34,47],current:[8,13],curv:39,data:[5,19,23,38],data_matrix:38,data_num:13,deal:47,decode_w:20,decompos:20,deep:[16,43,45],deep_copi:[16,43],deep_copy_set:43,deepcopi:45,deepli:43,defalut:42,default_inherit:40,default_post_inherit:40,defin:[20,21,23,34,40,45,46],degre:9,deriv:47,describ:[16,40],deviat:39,differenti:47,dim1:16,dim2:16,dim:[12,13,23,34,40],dimens:[12,13,14],dimension:[25,42,47],direct:[20,21,47],discret:[12,16,29,30,31,34],discrete_opt:[17,27],discrete_with_order_opt:[17,27],distanc:15,distinct:13,distinct_flag:13,distinct_sampl:13,distinct_sample_classifi:13,distinct_sample_from_set:13,doe:13,doesn:42,domin:4,dure:39,each:[13,16,20,38,43],earli:[21,42],element:[9,15,20,38],els:45,embed:[2,25,40,42],encapsul:43,end:15,entranc:[39,41],environ:19,equal:[43,46],error:[23,42],euclidean:15,eval:[23,40],eval_constraint:9,evalu:[13,40,42],even:[8,47],everi:[9,13],evolutionari:47,exampl:[],exce:42,except:26,exist:[5,43],exist_equ:43,exp_opt:[],experi:39,exponenti:42,expopt:39,extend:13,extra:34,fals:[4,5,13,16,39,42,43,45],far:40,farthest:15,feng:[9,38],figur:39,file:[20,21,23,28,29,30,31,32,33,34,38,39],filenam:[23,38],find:[5,15,38,43],find_maximum:43,find_minimum:43,first:[9,13,15,26,42,47],flatten:20,flip:9,focus:47,follow:42,for_test:5,forward:20,free:47,freq:13,frequenc:[13,42],from:[11,12,13,15,19,20,23,38,40,43],func:40,gaussian:32,gener:19,get:[14,15,21,39,40],get_best_solut:5,get_dim:[12,38],get_history_bestsofar:40,get_valu:9,global:[41,46],ground:47,gym:[19,21],gym_task:[17,18],gymtask:19,handl:[5,12,42],have:[26,38,43],hidden:21,high:[25,42,47],high_dim_handl:42,high_dimensionality_handl:0,hing:23,histori:40,how:33,hui:[5,28,32,33,40,42,43],ignor:20,immedi:42,impact:26,implement:[2,4,5,12,34,38],in_budget:21,in_siz:20,includ:[20,42,43],index:[12,15,23,38,43,47],inform:[16,19,21,43],inherit:[11,15,40],init:[13,19,20],init_attribut:13,init_sampl:42,initi:[20,34],initial:[12,13,14,15,16,38,39,40,42,43,46],input:[5,20,21,42],input_w:20,instanc:[14,16,23,34,42],instead:23,integ:[34,39],interfac:39,intermedi:[13,42],intermediate_freq:42,intermediate_print:13,intermediate_result:42,is_discret:16,is_distinct:13,is_equ:43,is_in_possible_solut:43,iset:[12,15],iset_typ:15,iter:13,judg:[4,16,46],judge_match:16,kei:5,label:23,lambda:5,larg:47,larger:15,largest:15,layer:[19,20,21],learn:[23,47],least:20,len:20,liac:23,limit:[16,26],limited_spac:16,linear:23,linear_classifier_using_ramploss:17,list1:45,list2:45,list:[5,9,13,15,20,38,39,40,43,45],list_compar:45,liu:[2,5,8,11,12,13,14,15,16,19,20,21,23,25,26,28,29,30,31,32,33,34,39,40,41,42,43,45,46],local:47,log:45,loss:[23,38],low:42,low_dimens:42,machin:47,main:41,make:9,mani:47,map:42,margin:15,matric:20,matrix:[20,38,42],matter:[16,42],max:21,max_step:21,maximum:[13,43],mean:[16,21,38,39],merg:16,merge_dim:16,metaheurist:47,method:[5,8,13,42],min:[39,41],minim:[25,28,29,30,31,32,39,41],minimize_ackley_continu:28,minimize_ackley_continuous_noisi:32,minimize_setcover_discret:29,minimize_sphere_continu:28,minimize_sphere_discrete_ord:30,minimize_sphere_mix:31,minimize_sphere_sr:25,minimum:43,mix:[12,31,34],mixed_classif:12,mixed_opt:[17,27],model:[19,20],modul:[2,4,5,11,12,13,14,15,16,25,26,38,39,40,41,42,43,45,46,47],mse:38,mutat:9,my_precis:46,name:[19,21,23,39],nan:43,neg:[12,15,38],negative_s:42,network:[19,20,21],neural:[19,20,21],neuron:[19,20,21],new_nnmodel:19,nn_model:[17,18],nn_policy_sampl:19,nnmodel:20,nois:[4,5,32,34,42],noise_handl:0,noisi:[4,36,47],non:23,non_update_allow:42,none:[20,21,39,40,42,43],normal:38,normalize_data:38,note:43,num_sr:42,number:[13,16,20,21,39,42],obj:45,object:[2,4,5,8,9,11,12,13,14,15,16,21,26,28,29,30,34,38,39],objectiv:[2,4,5,8,9,11,14,15,19,34,39,40,41],objectv:23,observ:19,onli:[8,21,42,47],opt:[2,4,5,8,9,11,14,15],opt_algorithm:0,opt_under_nois:[17,27],optim:[2,4,5,8,9,11,14,15,23,25,28,29,30,31,32,33,34,36,37,39,40,41,42,47],optima:47,optimiz:15,order:[16,30,47],origin:5,other:13,otherwis:[5,16,38],out_siz:20,output:[19,20,21,39,45],packag:[23,47],page:47,param:[4,15,38,40],paramet:[2,4,5,8,9,11,12,13,14,15,16,19,20,21,23,34,38,39,40,41],parameter_set:40,parent:40,pareto:[4,8,9],pareto_optim:[0,6,7],paretoopt:[0,6],paretooptim:8,part:13,partial:16,period:42,plot:39,plot_fil:39,polici:[19,20,21],ponss:[0,3],ponss_b:42,ponss_opt:[17,35],ponss_theta:42,popul:12,posit:[5,12,15,38,42],positive_s:[13,42],poss:[4,37,40,42],poss_opt:[17,35],possibl:5,post:40,post_attach:43,precis:[42,46],print:[12,16,39,43],print_dim:16,print_neg:12,print_po:12,print_sample_region:12,print_solution_set:43,probabl:9,problem:[4,23,29,34,36,37,38,47],procedur:[8,42],process:12,product:23,project:45,prop:20,properti:43,provid:[11,12,39,42],python:47,quick_start:[17,27],raco:[0,6,10],racos_al:[0,6],racos_classif:[0,6,10],racos_common:[0,6,10],racos_optim:[0,6,10],racosclassif:12,racoscommon:[11,13,15],racosoptim:14,ramploss:[17,22],rand:46,rand_sampl:[12,16],random:[2,12,15,16,25,39,40,42,46],reach:[21,42],read:[23,38],read_data:[23,38],readi:47,real:47,reducedim:[40,42],reevalu:43,reg:16,region:[12,16],regress:38,regret:39,regular:23,relat:16,ren:[2,5,8,11,12,13,14,15,16,19,20,21,23,25,26,28,29,30,31,32,33,34,39,40,41,42,43,45,46],repeat:[21,39,40],repeat_tim:40,replac:[5,14,15],repres:[11,15,40],requir:23,resampl:[5,40,42],resample_func:40,resample_tim:42,resample_valu:43,reset:[12,19],reset_classifi:12,reset_task:19,result:[15,21,39,40,41,42],result_analysi:39,reward:19,rule:42,run:[9,17,18],run_ss_test:21,run_test:21,runtim:19,same:[16,43,45],sampl:[5,12,13,16,42],satisfi:38,scale:47,search:[5,12,16,20,21,30,31,40,47],second:[9,47],seed:[39,46],select:[4,13,36,37],self:[5,12,13,16],sequenti:[2,13,15,25,40,42],sequential_random_embed:17,sequentialrandomembed:2,set:[5,9,12,13,15,16,19,34,39,40,41,42,43,46],set_al:16,set_func:40,set_glob:41,set_precis:46,set_se:46,set_uncertain_bit:12,seta:13,setb:13,setcov:[29,34],sever:[20,42],share:13,should:21,show:[13,42],show_best_solut:13,sigma:34,sigmoid:20,simpl:20,simple_funct:17,size:[14,16,20],small:20,sol:43,sol_set:43,solut:[2,4,5,8,9,11,13,14,15,19,23,26,34,38,39,40,42],solution1:4,solution2:4,solution_list:5,solv:4,some:[34,45],sort:[5,13],sort_solution_list:5,sourc:[2,4,5,8,9,11,12,13,14,15,16,19,20,21,23,25,26,28,29,30,31,32,34,38,39,40,41,42,43,45,46],space:[12,16,30,31,40],spars:38,sparse_ms:[17,35],sparse_regress:17,sparsemse:38,sphere:[25,26,28,30,31,34],sphere_discrete_ord:34,sphere_mix:34,sphere_sr:[17,24],sraco:[0,5,6,10,13,14],sre_optim:[0,1],ssraco:[0,3],standard:39,step:21,stop:[21,42],strategi:[5,14,15],strategy_lm:15,strategy_rr:15,strategy_wr:15,structur:[19,40,43],subset:[4,36,37],sum_reward:19,summat:19,suppress:[5,40,42],task:[19,21,34,47],task_nam:21,temp_act:19,terminal_valu:[21,42],test:21,testabl:47,text:45,than:15,thei:47,them:[5,20],theoret:47,theta:4,theta_domin:4,theta_weak_domin:4,thi:[2,4,5,9,11,12,13,14,15,16,19,20,21,23,25,26,28,29,30,31,32,33,34,38,39,40,41,42,43,45,46,47],third:47,though:8,three:47,threshold:4,thu:34,time:[13,39,40,42],time_budget:42,tool:[45,47],tool_funct:44,toolbox:47,toolfunct:45,top:39,train:[12,23],train_siz:[13,42],training_error:23,trajectori:19,trans_label:23,transform:[19,23],transform_act:19,tri:47,two:[13,16,43,45,46],type:47,uncertain:[5,11,12,14,15,42],uncertain_bit:[14,42],under:[4,32,34],unknown:47,update_possible_solut:5,use:40,user:[39,40,42],util:[],valu:[5,9,12,13,14,16,19,20,21,23,25,26,28,29,30,31,32,34,38,39,40,41,42,43,45,46],variabl:[40,41,46],varianc:38,variance_a:42,variant:[4,26],vector:[9,20,23,43],version:15,weakli:4,weight:[20,23,42],when:[21,42],where:38,whether:[13,16,39,40,42,46],which:[4,5,11,12,13,14,15,16,20,30,31,39,40,42,47],withdraw_alpha:42,without:5,world:47,worst:15,wrapper:8,xiong:[5,28,32,33,40,42,43],yang:[9,23,42,45],ylfx:23,you:21,zero:[16,38],zeroth:47,zoo_glob:44},titles:["algos","high_dimensionality_handling","sre_optimization","noise_handling","ponss","ssracos","opt_algorithms","paretoopt","pareto_optimization","paretoopt","racos_all","racos","racos_classification","racos_common","racos_optimization","sracos","dimension","example","direct_policy_search_for_gym","gym_task","nn_model","run","linear_classifier_using_ramploss","ramploss","sequential_random_embedding","continuous_sre_opt","sphere_sre","simple_functions","continuous_opt","discrete_opt","discrete_with_order_opt","mixed_opt","opt_under_noise","quick_start","simple_functions","sparse_regression","ponss_opt","poss_opt","sparse_mse","exp_opt","objective","opt","parameter","solution","utils","tool_function","zoo_global","Welcome to ZOOpt&#8217;s Reference!"],titleterms:{algo:0,continuous_opt:28,continuous_sre_opt:25,dimens:16,direct_policy_search_for_gym:18,discrete_opt:29,discrete_with_order_opt:30,exampl:17,exp_opt:39,gym_task:19,high_dimensionality_handl:1,indice:47,linear_classifier_using_ramploss:22,mixed_opt:31,nn_model:20,noise_handl:3,object:40,opt:41,opt_algorithm:6,opt_under_nois:32,paramet:42,pareto_optim:8,paretoopt:[7,9],ponss:4,ponss_opt:36,poss_opt:37,quick_start:33,raco:11,racos_al:10,racos_classif:12,racos_common:13,racos_optim:14,ramploss:23,refer:47,run:21,sequential_random_embed:24,simple_funct:[27,34],solut:43,sparse_ms:38,sparse_regress:35,sphere_sr:26,sraco:15,sre_optim:2,ssraco:5,tabl:47,tool_funct:45,util:44,welcom:47,zoo_glob:46,zoopt:47}})