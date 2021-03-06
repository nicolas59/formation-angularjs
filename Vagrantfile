# Vim
# vim: set filetype=ruby:
# vim: set ft=ruby:
#
# Emacs
# -*- mode: ruby; -*-

VAGRANTFILE_API_VERSION = "2"
MAX_MEMORY = 512

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

    # Vagrant box to build on
    config.vm.box = "ubuntu/trusty64"

    # host to guest port forwarding
    config.vm.network :forwarded_port, guest: 1337, host: 1337
	config.vm.network :forwarded_port, guest: 35729, host: 35729

	config.ssh.pty = true
	
	#Vagrant avec un proxy  (à declarer dans le shell) export VAGRANT_HTTP_PROXY="http://yourproxy:80"
	
	# Configuration du proxy au sein de la VM
	#vagrant plugin install vagrant-proxyconf
	#config.proxy.http     = "http://yourproxy:8080"
	#config.proxy.https    = "http://yourproxy:8080"
	#config.proxy.no_proxy = "localhost,127.0.0.1"
	
    # settings for VirtualBox provider
    config.vm.provider "virtualbox" do |v, override|
        v.memory = MAX_MEMORY

        if Vagrant::Util::Platform.windows?
            override.vm.synced_folder "./www", "/home/vagrant/www", disabled: true

            v.customize ["sharedfolder", "add", :id, "--name", "www", "--hostpath", (("//?/" + File.dirname(__FILE__) + "/www").gsub("/","\\"))]

            #override.vm.provision :shell, inline: "mount -t vboxsf -o uid=`id -u vagrant`,gid=`getent group vagrant | cut -d: -f3` www /home/vagrant/www", run: "always"
            override.vm.provision :shell, inline: "mkdir -p /home/vagrant/www"
        else
            # set up synced folder
            override.vm.synced_folder "./www", "/home/vagrant/www"
        end

        v.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/www", "1"]
    end

    # call provisioner shell scripts
    config.vm.provision :shell, path: "./enable-swap.sh", run: "always"
    config.vm.provision :shell, path: "./provisioner.sh"
    config.vm.provision :shell, path: "./postinstall.sh", privileged: false
end
