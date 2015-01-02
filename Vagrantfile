Vagrant.configure("2") do |o|
  o.vm.box = "precise32"
  o.vm.box_url = "http://files.vagrantup.com/precise32.box"
  o.vm.synced_folder  "./app","/var/www/", create:true
  o.vm.network "private_network", ip: "192.168.55.55"
  o.vm.network "forwarded_port", guest: 9999, host: 9999
  o.vm.provision :shell, :path => "setup.sh"
end
