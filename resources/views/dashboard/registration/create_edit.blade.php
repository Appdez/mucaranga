@extends('layouts.app')
@section('title', request()->routeIs('registration.edit') ? 'Editar o matriculado de nome  ' . $registration->name : 'Realizar nova matrícula')
@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="row">
                <div class="card">
                    <div class="card-header row justify-content-between">
                        <a href="{{ route('registration.index') }}" class="col-auto btn btn-info">
                            <i class="align-middle" data-feather="corner-up-left"></i>&nbsp; Voltar
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        @if ($errors->any())
                            <div class="alert alert-danger alert-dismissible " role="alert"
                                style="border-left: 5px solid darkred;">
                                <button type="button" class="btn-close" data-bs-dismiss="alert"
                                    aria-label="Close"></button>
                                <div class="alert-message">
                                    <ul class="list-unstyled">
                                        @foreach ($errors->all() as $error)
                                            <li><i class="align-middle" data-feather="alert-triangle"></i> &nbsp;
                                                <strong>{{ $error }}</strong>
                                            </li>
                                        @endforeach
                                    </ul>
                                </div>
                            </div>
                        @endif
                        <div class="container row">

                            @if (request()->routeIs('registration.edit'))
                                <form action="{{ route('registration.update', $registration->id) }}" method="post">
                                    @method('PATCH')@csrf
                                    <input type="hidden" name="id" value="{{$registration->id}}">
                                @else
                                    <form action="{{ route('registration.store') }}" method="post">
                                        @method('POST')@csrf
                            @endif

                            <div class="row justify-content-between mb-3">

                                <label for="name">Nome do estudante</label>
                                <div class="row col-md-12">
                                    <input name="name" value="@if(old('name')){{old('name')}}@elseif(request()->routeIs('registration.edit')){{ $registration->name }}@endif" type="text" class="form-control"
                                        placeholder="Nome do estudante" autofocus autocomplete="" required >
                                </div>
                            </div>

                            <div class="row container justify-content-center col-md-12">
                                <input type="submit" class="btn btn-primary rounded-3 col" value="@if (request()->routeIs('registration.edit')) Actualizar @else Guardar @endif">
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
