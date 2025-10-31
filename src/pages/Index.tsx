import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>('all');

  const services = [
    {
      id: 1,
      title: 'Техническое обслуживание',
      description: 'Полный комплекс работ по регламенту производителя',
      icon: 'Settings',
      brands: ['Toyota', 'Honda', 'Nissan', 'Mazda', 'Lexus'],
      details: [
        'Замена масла и фильтров',
        'Проверка тормозной системы',
        'Диагностика ходовой части',
        'Проверка электрооборудования'
      ]
    },
    {
      id: 2,
      title: 'Диагностика двигателя',
      description: 'Компьютерная диагностика всех систем',
      icon: 'Activity',
      brands: ['Toyota', 'Honda', 'Nissan', 'Mazda', 'Lexus', 'Subaru'],
      details: [
        'Сканирование блоков управления',
        'Проверка датчиков',
        'Анализ параметров работы',
        'Расшифровка ошибок'
      ]
    },
    {
      id: 3,
      title: 'Ремонт ходовой части',
      description: 'Восстановление подвески и рулевого управления',
      icon: 'Wrench',
      brands: ['Toyota', 'Honda', 'Nissan', 'Mazda', 'Lexus'],
      details: [
        'Замена амортизаторов',
        'Ремонт рулевых тяг',
        'Замена сайлентблоков',
        'Развал-схождение'
      ]
    },
    {
      id: 4,
      title: 'Ремонт тормозной системы',
      description: 'Обслуживание и ремонт тормозов',
      icon: 'CircleStop',
      brands: ['Toyota', 'Honda', 'Nissan', 'Mazda', 'Lexus', 'Subaru'],
      details: [
        'Замена тормозных колодок',
        'Замена тормозных дисков',
        'Замена тормозной жидкости',
        'Прокачка тормозов'
      ]
    },
    {
      id: 5,
      title: 'Замена масла АКПП/МКПП',
      description: 'Профессиональная замена трансмиссионного масла',
      icon: 'Gauge',
      brands: ['Toyota', 'Honda', 'Nissan', 'Mazda', 'Lexus'],
      details: [
        'Частичная замена',
        'Полная замена с промывкой',
        'Замена фильтров АКПП',
        'Регулировка уровня'
      ]
    },
    {
      id: 6,
      title: 'Кузовной ремонт',
      description: 'Восстановление геометрии и покраска',
      icon: 'Car',
      brands: ['Toyota', 'Honda', 'Nissan', 'Mazda', 'Lexus', 'Subaru'],
      details: [
        'Устранение вмятин',
        'Рихтовка кузова',
        'Покраска элементов',
        'Полировка кузова'
      ]
    }
  ];

  const pricing = [
    {
      category: 'Техническое обслуживание',
      items: [
        { name: 'ТО-1 (10 000 км)', price: 'от 4 500', popular: false },
        { name: 'ТО-2 (20 000 км)', price: 'от 6 500', popular: true },
        { name: 'ТО-3 (30 000 км)', price: 'от 8 500', popular: false },
        { name: 'Комплексное ТО', price: 'от 12 000', popular: false }
      ]
    },
    {
      category: 'Диагностика',
      items: [
        { name: 'Компьютерная диагностика', price: 'от 1 500', popular: true },
        { name: 'Диагностика ходовой части', price: 'от 1 000', popular: false },
        { name: 'Диагностика двигателя', price: 'от 2 500', popular: false },
        { name: 'Полная диагностика авто', price: 'от 5 000', popular: false }
      ]
    },
    {
      category: 'Ремонт ходовой',
      items: [
        { name: 'Замена амортизатора', price: 'от 1 800', popular: false },
        { name: 'Замена рулевой тяги', price: 'от 2 200', popular: false },
        { name: 'Замена сайлентблоков', price: 'от 1 500', popular: true },
        { name: 'Развал-схождение', price: 'от 2 000', popular: false }
      ]
    },
    {
      category: 'Тормозная система',
      items: [
        { name: 'Замена колодок (ось)', price: 'от 1 200', popular: true },
        { name: 'Замена дисков (ось)', price: 'от 3 500', popular: false },
        { name: 'Замена тормозной жидкости', price: 'от 1 500', popular: false },
        { name: 'Ремонт суппорта', price: 'от 2 800', popular: false }
      ]
    }
  ];

  const brands = ['all', 'Toyota', 'Honda', 'Nissan', 'Mazda', 'Lexus', 'Subaru'];

  const filteredServices = selectedBrand === 'all' 
    ? services 
    : services.filter(service => service.brands.includes(selectedBrand));

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <Icon name="Car" size={28} className="text-accent-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">JapanService</h1>
                <p className="text-sm text-muted-foreground">Техническое обслуживание японских автомобилей</p>
              </div>
            </div>
            <Button className="bg-accent hover:bg-accent/90">
              <Icon name="Phone" size={18} className="mr-2" />
              Записаться
            </Button>
          </div>
        </div>
      </header>

      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(234,56,76,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground">Премиальный сервис</Badge>
            <h2 className="text-5xl font-bold mb-6">Профессиональное обслуживание японских автомобилей</h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Высочайшее качество работ, оригинальные запчасти и современное оборудование для вашего автомобиля
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <div className="flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-lg">
                <Icon name="CheckCircle" size={20} className="text-accent" />
                <span>Гарантия качества</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-lg">
                <Icon name="Clock" size={20} className="text-accent" />
                <span>Быстрый сервис</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-lg">
                <Icon name="Award" size={20} className="text-accent" />
                <span>Опыт 15+ лет</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground text-lg">Полный спектр услуг для вашего автомобиля</p>
          </div>

          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            {brands.map((brand) => (
              <Button
                key={brand}
                variant={selectedBrand === brand ? 'default' : 'outline'}
                onClick={() => setSelectedBrand(brand)}
                className={selectedBrand === brand ? 'bg-primary' : ''}
              >
                {brand === 'all' ? 'Все марки' : brand}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Card key={service.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
                <CardHeader>
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {service.brands.map((brand) => (
                      <Badge key={brand} variant="secondary" className="text-xs">
                        {brand}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Цены на услуги</h2>
            <p className="text-muted-foreground text-lg">Прозрачное ценообразование без скрытых платежей</p>
          </div>

          <Tabs defaultValue={pricing[0].category} className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto gap-2 bg-transparent">
              {pricing.map((category) => (
                <TabsTrigger 
                  key={category.category} 
                  value={category.category}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3"
                >
                  {category.category}
                </TabsTrigger>
              ))}
            </TabsList>

            {pricing.map((category) => (
              <TabsContent key={category.category} value={category.category} className="mt-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {category.items.map((item, idx) => (
                        <div 
                          key={idx} 
                          className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all hover:border-accent ${
                            item.popular ? 'bg-accent/5 border-accent' : 'bg-card'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full ${item.popular ? 'bg-accent' : 'bg-muted'}`}></div>
                            <div>
                              <p className="font-semibold flex items-center gap-2">
                                {item.name}
                                {item.popular && (
                                  <Badge variant="destructive" className="text-xs bg-accent">Популярно</Badge>
                                )}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-primary">{item.price} ₽</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">* Цены указаны без стоимости запчастей</p>
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              <Icon name="Calculator" size={18} className="mr-2" />
              Рассчитать стоимость ремонта
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">JapanService</h3>
              <p className="text-primary-foreground/80">
                Профессиональное обслуживание и ремонт японских автомобилей с 2009 года
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Контакты</h3>
              <div className="space-y-2 text-primary-foreground/80">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@japanservice.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Автомобильная, 15
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">График работы</h3>
              <div className="space-y-2 text-primary-foreground/80">
                <p>Пн-Пт: 09:00 - 20:00</p>
                <p>Сб: 10:00 - 18:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>© 2024 JapanService. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
