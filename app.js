// Dados dos serviços
const servicesData = {
  churrasco: {
    id: "churrasco",
    name: "Churrasco",
    description: "Carnes nobres grelhadas na brasa",
    menu: {
      ENTRADAS: ["Carne de Sol", "Linguiça de Frango e Suina", "Coração de Frango", "Frango Desossado", "Pão de alho"],
      PRINCIPAL: ["Picanha", "Maminha", "Fraldinha", "Alcatra", "Carne de Sol", "Costela Suína", "Lombinho Suíno", "Linguiça de Frango e Suína", "Frango desossado", "Coração de Frango"],
      GUARNIÇÕES: ["Arroz", "Feijão tropeiro", "Mandioca com manteiga", "Vinagrete", "Pão com alho", "Salada verde", "Farofa de Cuscuz", 'Molho Mel e Mostarda'],
      BEBIDAS: ["Coca Cola Comum", "Coca Cola Zero Açucar", "Guaraná", "Suco de Caju", "Suco de Abacaxi"]
    }
  },
  crepe: {
    id: "crepe",
    name: "Crepe",
    description: "Crepes doces e salgados gourmet",
    menu: {
      CREPES_DOCE: ["Crepe de frango", "Crepe de camarão", "Crepe Nutella", "Crepe de morango"],
      CREPES_SALGADOS: ["Crepe vegetariano", "Crepe de queijo", "Crepe de chocolate", "Crepe de frutas"],
      BEBIDAS: ["Coca Cola Comum", "Coca Cola Zero Açucar", "Guaraná", "Suco de Caju", "Suco de Abacaxi"]
    }

  },
  massa: {
    id: "massa",
    name: "Massas",
    description: "Massas artesanais com molhos especiais",
    menu: { 
      MASSAS: ["Spaghetti Carbonara", "Penne Arrabbiata", "Lasanha à Bolonhesa", "Ravioli de ricota"],
      ACOMPANHAMENTOS: ["Nhoque ao molho pesto", "Fettuccine Alfredo", "Risotto de camarão", "Salada Caesar"],
      BEBIDAS: ["Coca Cola Comum", "Coca Cola Zero Açucar", "Guaraná", "Suco de Caju", "Suco de Abacaxi"]
    }
  },
  jantar: {
    id: "jantar",
    name: "Jantar",
    description: "Menu executivo completo",
    menu: {
      ENTRADAS: ["SALGADOS ASSADOS", "Folhado de Frango com Abacxi", "Folhado Romeu e Julieta", "Folhado de Bacalhau", "Folhado de Camarão", "SALGADOS FRITOS", "Bombom de Azeitona", "Bombom de Provolone", "Delícia de Queijo", "Dadinho de Tápioca", "Pasteis de Carne e Queijo", "Coxinha de Frango com Catupiry"],
      EMPRATADOS: ["Camarão com Bechamel de Baroa", "Frango com Bechamel de Baroa", "Escondidinho de Carne Seca", "Escondidinho de Frango"],
      PRATO_PRINCIPAL: ["File Mignon ao Molho Madeira", "Isca de Frango Recheado ao Molho Branco", "Bacalhau ao Zé do Pipo", "Lagarto ao Molho Madeira"],
      GUARNIÇÕES: ["Arroz branco", "Arroz com Brócolis", "Batata Rustica", "Salada verde", "Molho de Mostarda e Mel"],
      BEBIDAS: ["Coca Cola Comum", "Coca Cola Zero Açucar", "Guaraná", "Suco de Caju", "Suco de Abacaxi"]
    }
  },
  almoco: {
    id: "almoco",
    name: "Almoço",
    description: "Buffet livre variado",
    menu:{
      ENTRADAS: ["SALGADOS ASSADOS", "Folhado de Frango com Abacxi", "Folhado Romeu e Julieta", "Folhado de Bacalhau", "Folhado de Camarão", "SALGADOS FRITOS", "Bombom de Azeitona", "Bombom de Provolone", "Delícia de Queijo", "Dadinho de Tápioca", "Pasteis de Carne e Queijo", "Coxinha de Frango com Catupiry"],
      EMPRATADOS: ["Camarão com Bechamel de Baroa", "Isca de Frango com Bechamel de Baroa", "Escondidinho de Carne Seca", "Escondidinho de Frango"],
      PRATO_PRINCIPAL: ["File Mignon ao Molho Madeira", "Frango Recheado ao Molho Branco", "Bacalhau ao Zé do Pipo", "Lagarto ao Molho Madeira"],
      GUARNIÇÕES: ["Arroz branco", "Arroz com Brócolis", "Batata Rustica", "Salada verde", "Molho de Mostarda e Mel"],
      BEBIDAS: ["Coca Cola Comum", "Coca Cola Zero Açucar", "Guaraná", "Suco de Caju", "Suco de Abacaxi"]
    }
  },
  coquetel: {
    id: "coquetel",
    name: "Coquetel Volante",
    description: "Finger foods e canapés sofisticados",
    menu: {
      FINGER_FOODS: ["Canapés de salmão", "Mini sanduíches", "Coxinhas gourmet", "Empadas variadas", "Bruschetta caprese", "Tortinhas doces", "Drinks especiais", "Espumante"],
      SALGADOS_ASSADOS: ["Folhado de Frango", "Sushi e sashimi", "Salada de camarão", "Mini wraps", "Canapés vegetarianos", "Mini quiches", "Drinks especiais", "Espumante"],
      BEBIDAS: ["Coca Cola Comum", "Coca Cola Zero Açucar", "Guaraná", "Suco de Caju", "Suco de Abacaxi"]
    }
  },
  boteco: {
    id: "boteco",
    name: "Comida de Boteco",
    description: "Petiscos tradicionais brasileiros",
    menu: {
      ILHA_DE_BOTECO: ["Calabresa Acebolada", "Tropeirinho", "Carne de Sol com Mandioca", "Torresmo a Pururuca", "Linguiça acebolada", "Frango a Passarinho", "Pateis de Queijo e Carne", "Kibe com Queijo", "Kibe sem Queijo", "Batata Frita", "Arroz Carreteiro"],
      CALDOS: ["Caldo de Carne Seca com Abobora", "Caldo de Costela com Mandioca"],
      EMPRATADOS: ["Isca de Frango com Bechamel de Baroa", "Escondidinho de Carne Seca com Parmesão"],
      BEBIDAS: ["Coca Cola Comum", "Coca Cola Zero Açucar", "Guaraná", "Suco de Caju", "Suco de Abacaxi"]
    }
  },
  junina: {
    id: "junina",
    name: "Festa Junina",
    description: "Comidas típicas e decoração temática",
    menu: {
      PRATOS_TIPICOS: ["Pamonha doce", "Canjica cremosa", "Milho cozido", "Quentão", "Pé de moleque", "Cocada", "Paçoca caseira", "Vinho quente"],
      CALDOS: ["Caldo verde", "Caldo de mandioca com carne seca"],
      CHURRASQUINHO: ["Espetinho de carne", "Espetinho de frango", "Espetinho de linguiça"],
      BEBIDAS: ["Coca Cola Comum", "Coca Cola Zero Açucar", "Guaraná", "Suco de Caju", "Suco de Abacaxi"]
    }
  },
  feijoada: {
    id: "feijoada",
    name: "Feijoada Mineira ",
    description: "Feijoada completa com acompanhamentos tradicionais",
    menu: {
      ENTRADAS: ["Caldinho de Feijão", "Pastel de Queijo e Carne", "Linguiça Acebolada com Pães"],
      FEIJOADA: ["Feijoada de Carne Seca", "Feijoada de Costelinha Suina e Lombinho", "Feijoada de Paio e Calabresa"],  
      GUARNIÇÕES: ["Arroz branco", "Farofa crocante", "Couve refogada", "Laranja fatiada", "Torresmo crocante", "Molho de pimenta"],
      BEBIDAS: ["Coca Cola Comum", "Coca Cola Zero Açucar", "Guaraná", "Suco de Caju", "Suco de Abacaxi"]
    }
  }
};

// Informações da empresa
const companyInfo = {
  name: "Euler Passos Buffet",
  phone: "(61) 99905-3461",
  email: "contato@eulerpassosbuffet.com.br",
  address: "St. de Clubes Esportivos Sul Trecho 2 - Plano Piloto, 70297-400 Brasília - DF"

};

// Aguarda o DOM estar totalmente carregado
document.addEventListener('DOMContentLoaded', function() {
  console.log('Inicializando Buffet & Eventos Premium...');
  
  // DOM Elements
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const modal = document.getElementById('cardapio-modal');
  const modalClose = document.getElementById('modal-close');
  const modalBackdrop = modal?.querySelector('.modal__backdrop');
  
  // Mobile Navigation Toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
      console.log('Menu mobile toggled');
    });
  }

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (navMenu) navMenu.classList.remove('active');
      if (navToggle) navToggle.classList.remove('active');
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      
      if (target) {
        const headerHeight = 80;
        const targetPosition = target.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Update active nav link
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
        
        console.log('Scrolling to:', targetId);
      }
    });
  });

  // Modal functionality
  function openModal(serviceId) {
    console.log('Opening modal for service:', serviceId);
    
    const service = servicesData[serviceId];
    if (!service || !modal) {
      console.error('Service not found or modal not available:', serviceId);
      return;
    }

    // Update modal content
    const modalIcon = document.getElementById('modal-icon');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalMenu = document.getElementById('modal-menu');

    if (modalIcon) modalIcon.textContent = service.icon;
    if (modalTitle) modalTitle.textContent = service.name;
    if (modalDescription) modalDescription.textContent = service.description;
    
    if (modalMenu) {
      modalMenu.innerHTML = '';

      Object.keys(service.menu).forEach(category => {
        const details = document.createElement('details');
        const summary = document.createElement('summary');
        summary.textContent = category;

        const ul = document.createElement('ul');
        service.menu[category].forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          ul.appendChild(li);
        });

        details.appendChild(summary);
        details.appendChild(ul);
        modalMenu.appendChild(details);
      });
      enableAccordion();
    }
    

    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    console.log('Modal opened successfully');
  }
 
  function closeModal() {
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
      
      // Clear form
      const orcamentoForm = document.getElementById('orcamento-form');
      if (orcamentoForm) {
        orcamentoForm.reset();
      }
      console.log('Modal closed');
    }
  }

  // Event listeners for service cards
  const servicoCards = document.querySelectorAll('.servico__card');
  servicoCards.forEach(card => {
    card.addEventListener('click', function(e) {
      e.preventDefault();
      const serviceId = this.getAttribute('data-service');
      console.log('Service card clicked:', serviceId);
      openModal(serviceId);
    });
    
    // Also add event listener to buttons inside cards
    const button = card.querySelector('.btn');
    if (button) {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const serviceId = card.getAttribute('data-service');
        console.log('Service button clicked:', serviceId);
        openModal(serviceId);
      });
    }
  });

  // Modal close events
  if (modalClose) {
    modalClose.addEventListener('click', function(e) {
      e.preventDefault();
      closeModal();
    });
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', function(e) {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  //Função para ativar comportamento do tipo accordion nos detalhes do menu
  function enableAccordion() {
    const detailsElements = document.querySelectorAll('#modal-menu details');

    detailsElements.forEach((targetDetail) => {
      targetDetail.addEventListener('click', () => {
        detailsElements.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute('open');
          }
        });
      });
    });
  }  

  // WhatsApp message formatting
  function formatWhatsAppMessage(formData, isOrcamento = false) {
    let message = `*${companyInfo.name}*\n\n`;
    
    if (isOrcamento) {
      const serviceName = document.getElementById('modal-title')?.textContent || '';
      message += `*Solicitação de Orçamento - ${serviceName}*\n\n`;
      message += `*Nome:* ${formData.nome}\n`;
      message += `*E-mail:* ${formData.email}\n`;
      message += `*Telefone:* ${formData.telefone}\n`;
      message += `*Data do Evento:* ${formatDate(formData.data)}\n`;
      message += `*Número de Pessoas:* ${formData.pessoas}\n`;
      
      if (formData.observacoes) {
        message += `*Observações:* ${formData.observacoes}\n`;
      }
    } else {
      message += `*Contato Geral*\n\n`;
      message += `*Nome:* ${formData.nome}\n`;
      message += `*E-mail:* ${formData.email}\n`;
      message += `*Telefone:* ${formData.telefone}\n`;
      
      if (formData.dataEvento) {
        message += `*Data do Evento:* ${formatDate(formData.dataEvento)}\n`;
      }
      
      if (formData.tipoEvento) {
        message += `*Tipo de Evento:* ${formData.tipoEvento}\n`;
      }
      
      if (formData.mensagem) {
        message += `*Mensagem:* ${formData.mensagem}\n`;
      }
    }
    
    message += `\n_Enviado através do site ${companyInfo.name}_`;
    
    return encodeURIComponent(message);
  }

  // Date formatting helper
  function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('pt-BR');
  }

  // WhatsApp redirect
  function sendToWhatsApp(message) {
    const phoneNumber = companyInfo.phone.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/55${phoneNumber}?text=${message}`;
    console.log('Opening WhatsApp with URL:', whatsappUrl);
    
    // Open WhatsApp in new tab
    const newWindow = window.open(whatsappUrl, '_blank');
    
    if (!newWindow) {
      // Fallback if popup blocker prevents opening
      alert('Redirecionamento para WhatsApp foi bloqueado. Por favor, permita pop-ups para este site ou copie o link: ' + whatsappUrl);
    } else {
      alert('Redirecionando para o WhatsApp...');
    }
  }

  // Form validation
  function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    let firstInvalidField = null;
    
    requiredFields.forEach(field => {
      field.style.borderColor = '';
      
      if (!field.value.trim()) {
        field.style.borderColor = '#DC143C';
        isValid = false;
        if (!firstInvalidField) {
          firstInvalidField = field;
        }
      }
    });
    
    // Email validation
    const emailFields = form.querySelectorAll('input[type="email"]');
    emailFields.forEach(field => {
      if (field.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
          field.style.borderColor = '#DC143C';
          isValid = false;
          if (!firstInvalidField) {
            firstInvalidField = field;
          }
        }
      }
    });
    
    // Date validation (must be future date for required date fields)
    const dateFields = form.querySelectorAll('input[type="date"][required]');
    dateFields.forEach(field => {
      if (field.value) {
        const selectedDate = new Date(field.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
          field.style.borderColor = '#DC143C';
          isValid = false;
          if (!firstInvalidField) {
            firstInvalidField = field;
          }
        }
      }
    });
    
    // Focus on first invalid field
    if (firstInvalidField) {
      firstInvalidField.focus();
    }
    
    return isValid;
  }

  // Contact form handler
  const contatoForm = document.getElementById('contato-form');
  if (contatoForm) {
    contatoForm.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log('Contact form submitted');
      
      if (!validateForm(contatoForm)) {
        alert('Por favor, preencha todos os campos obrigatórios corretamente.');
        return;
      }
      
      const formData = {
        nome: document.getElementById('nome')?.value || '',
        email: document.getElementById('email')?.value || '',
        telefone: document.getElementById('telefone')?.value || '',
        dataEvento: document.getElementById('data-evento')?.value || '',
        tipoEvento: document.getElementById('tipo-evento')?.value || '',
        mensagem: document.getElementById('mensagem')?.value || ''
      };
      
      const message = formatWhatsAppMessage(formData);
      sendToWhatsApp(message);
      
      // Reset form after successful submission
      contatoForm.reset();
    });
  }

  // Budget form handler
  const orcamentoForm = document.getElementById('orcamento-form');
  if (orcamentoForm) {
    orcamentoForm.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log('Budget form submitted');
      
      if (!validateForm(orcamentoForm)) {
        alert('Por favor, preencha todos os campos obrigatórios corretamente.');
        return;
      }
      
      const formData = {
        nome: document.getElementById('orcamento-nome')?.value || '',
        email: document.getElementById('orcamento-email')?.value || '',
        telefone: document.getElementById('orcamento-telefone')?.value || '',
        data: document.getElementById('orcamento-data')?.value || '',
        pessoas: document.getElementById('orcamento-pessoas')?.value || '',
        observacoes: document.getElementById('orcamento-observacoes')?.value || ''
      };
      
      const message = formatWhatsAppMessage(formData, true);
      sendToWhatsApp(message);
      
      // Close modal and reset form
      setTimeout(() => {
        closeModal();
      }, 1000);
    });
  }

  // Clear form validation styling on input
  document.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('input', function() {
      this.style.borderColor = '';
    });
  });

  // Update active navigation link on scroll
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });

    // Header background on scroll
    const header = document.querySelector('.header');
    if (header) {
      if (window.scrollY > 100) {
        header.style.backdropFilter = 'blur(10px)';
      } else {
        header.style.backgroundColor = 'var(--color-surface)';
        header.style.backdropFilter = 'none';
      }
    }
  });

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document.querySelectorAll('.diferencial__card, .servico__card, .avaliacao__card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Set minimum date for date inputs to today
  const today = new Date().toISOString().split('T')[0];
  document.querySelectorAll('input[type="date"][required]').forEach(input => {
    input.setAttribute('min', today);
  });

  console.log('Euler Passos Buffet - Site carregado com sucesso!');
});