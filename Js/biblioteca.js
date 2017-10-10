function produto(nome,preco,id,quant){
					this.nome= nome;
					this.preco = preco;
					this.id = id;
					this.quant = quant;
					
	
				};
				

				 /* function getProduto(nome) {
					var result = null;
					$.each(cardapio,function(i,prod){
						if(prod.nome == nome){
							result = prod;
						}
					});
					return result;
				};

				  function adicionarProduto(nome,preco){
					var produtoExistente = getProduto(nome);
					
					if(produtoExistente == null){
						cardapio.push(new produto(nome,preco));
					}
				};
				*/
				var pedido = [];
				function total(){
					var contador = 0;
					$.each(pedido,function(i,item){
						contador = contador + (item.preco*item.quantidade);
					});
					return contador;

				}
				  function itemPedido(produto){
					this.nome = produto.nome;
					this.quantidade = 1;
					this.id=produto.id;
					this.preco = produto.preco;
					
				};

				  function getItemPedido(prod){
					var result = null;
					$.each(pedido,function(i,item){
						if(item.id == prod.id ){
							result = item;
						}
					});
					return result;
				};
				function substituir(novo){
					
					$("#pedidos " +"#"+novo.id+" .quantidade").text(novo.quantidade);
					$("#pedidos " +"#"+novo.id+" .preco").text(novo.quantidade*novo.preco);
					$(".total").text("TOTAL:"+ total());

				}
				function adicionaItemPedido(prod){
					var itemExistente = getItemPedido(prod);
					if(itemExistente!= null){
						$.each(pedido,function(i,item){
							if(item.id == itemExistente.id){
								item.quantidade = item.quantidade+1;
								substituir(item);
								
							}
						});
						
					}
					else{
						pedido.push(new itemPedido(prod));
						$("#pedidos").append($("<tr/>")
								.attr("id",prod.id)
								.append($("<td/>")
									.text(prod.nome)
									.addClass("nome")
									)
								.append($("<td/>")
									.text(prod.quant)
									.addClass("quantidade")
									)
								.append($("<td/>")
									.text(prod.preco)
									.addClass("pre")
									)
								.append($("<td/>")
									.text(prod.quant*prod.preco)
									.addClass("preco")

									)
								.append($("<img/>")
									.attr("src","./img/lixeira.png")
									.attr("id",prod.id)
									.addClass("lixeira")
									)
								)
							$(".total").text("TOTAL:"+ total());
							
							}
						
					}
				
				
				function pesquisaPorId(vetor, objid){
					var result;
					$.each(vetor,function(index,obj){

						if(obj.id == objid){
							result = obj;
						}
					})
					return result;
				}
				function apagar(id){
					$("#pedidos " +"#"+id).remove();
					pedido.splice(pedido[id],1);
					$(".total").text("TOTAL:"+ total());
					
				}